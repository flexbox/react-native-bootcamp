"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _keywords = require('../parser/tokenizer/keywords');
var _types = require('../parser/tokenizer/types');


/**
 * Special case code to scan for imported names in ESM TypeScript. We need to do this so we can
 * properly get globals so we can compute shadowed globals.
 *
 * This is similar to logic in CJSImportProcessor, but trimmed down to avoid logic with CJS
 * replacement and flow type imports.
 */
 function getTSImportedNames(tokens) {
  const importedNames = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    if (
      tokens.matches1AtIndex(i, _types.TokenType._import) &&
      !tokens.matches3AtIndex(i, _types.TokenType._import, _types.TokenType.name, _types.TokenType.eq)
    ) {
      collectNamesForImport(tokens, i, importedNames);
    }
  }
  return importedNames;
} exports.default = getTSImportedNames;

function collectNamesForImport(
  tokens,
  index,
  importedNames,
) {
  index++;

  if (tokens.matches1AtIndex(index, _types.TokenType.parenL)) {
    // Dynamic import, so nothing to do
    return;
  }

  if (tokens.matches1AtIndex(index, _types.TokenType.name)) {
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
    if (tokens.matches1AtIndex(index, _types.TokenType.comma)) {
      index++;
    }
  }

  if (tokens.matches1AtIndex(index, _types.TokenType.star)) {
    // * as
    index += 2;
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
  }

  if (tokens.matches1AtIndex(index, _types.TokenType.braceL)) {
    index++;
    collectNamesForNamedImport(tokens, index, importedNames);
  }
}

function collectNamesForNamedImport(
  tokens,
  index,
  importedNames,
) {
  while (true) {
    if (tokens.matches1AtIndex(index, _types.TokenType.braceR)) {
      return;
    }

    // We care about the local name, which might be the first token, or if there's an "as", is the
    // one after that.
    let name = tokens.identifierNameAtIndex(index);
    index++;
    if (tokens.matchesContextualAtIndex(index, _keywords.ContextualKeyword._as)) {
      index++;
      name = tokens.identifierNameAtIndex(index);
      index++;
    }
    importedNames.add(name);
    if (tokens.matches2AtIndex(index, _types.TokenType.comma, _types.TokenType.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, _types.TokenType.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, _types.TokenType.comma)) {
      index++;
    } else {
      throw new Error(`Unexpected token: ${JSON.stringify(tokens.tokens[index])}`);
    }
  }
}
