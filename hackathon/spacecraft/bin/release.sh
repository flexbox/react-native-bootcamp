#!/bin/bash
prompt() {
  echo "$1"
  read -p "Would you like to release? [Y/n]: " PROMPT_RESULT
}

yarn version --minor
# Read 'version' key from package.json
version=$(jq -r '.version' ./package.json)
echo "Releasing $version"

# Add a git tag based on the 'version'
# git tag -a "$version" -m "Release $version"
git commit -am "chore: 🤖 release $version"
git push origin main
echo "Pushed $version to github.com"

prompt "Release to production for iOS and Android"
if [[ $PROMPT_RESULT == "Y" ]]; then
  # Release to production
  # eas build --auto-submit --platform=ios --non-interactive
  eas build --auto-submit --platform=android --non-interactive
fi
