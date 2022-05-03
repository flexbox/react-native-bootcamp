"use strict";

var _jestWatcher = require("jest-watcher");

var _pluginTester = _interopRequireDefault(require("../../test_utils/pluginTester"));

var _plugin = _interopRequireDefault(require("../plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projects = [{
  config: {
    rootDir: '/project'
  },
  testPaths: ['/project/src/foo.js', '/project/src/file-1.js']
}, {
  config: {
    rootDir: '/project'
  },
  testPaths: ['/project/src/bar.js', '/project/src/file-2.js']
}];
it('shows the correct initial state', async () => {
  const {
    stdout,
    hookEmitter,
    updateConfigAndRun,
    plugin,
    type
  } = (0, _pluginTester.default)(_plugin.default);
  hookEmitter.onFileChange({
    projects
  });
  const runPromise = plugin.run({}, updateConfigAndRun);
  expect(stdout.write.mock.calls.join('\n')).toMatchSnapshot();
  type(_jestWatcher.KEYS.ENTER);
  await runPromise;
});
it('can use arrows to select a specific file', async () => {
  const {
    stdout,
    hookEmitter,
    updateConfigAndRun,
    plugin,
    type
  } = (0, _pluginTester.default)(_plugin.default);
  hookEmitter.onFileChange({
    projects
  });
  const runPromise = plugin.run({}, updateConfigAndRun);
  stdout.write.mockReset();
  type('f', 'i', _jestWatcher.KEYS.ARROW_DOWN, _jestWatcher.KEYS.ENTER);
  expect(stdout.write.mock.calls.join('\n')).toMatchSnapshot();
  await runPromise;
  expect(updateConfigAndRun).toHaveBeenCalledWith({
    mode: 'watch',
    testPathPattern: 'src/file-1\\.js'
  });
});
it('can select a specific file that includes a regexp special character', async () => {
  const {
    hookEmitter,
    updateConfigAndRun,
    plugin,
    type
  } = (0, _pluginTester.default)(_plugin.default);
  hookEmitter.onFileChange({
    projects: [{
      config: {
        rootDir: '/project'
      },
      testPaths: ['/project/src/file_(xyz).js']
    }]
  });
  const runPromise = plugin.run({}, updateConfigAndRun);
  type('x', 'y', 'z', _jestWatcher.KEYS.ARROW_DOWN, _jestWatcher.KEYS.ENTER);
  await runPromise;
  expect(updateConfigAndRun).toHaveBeenCalledWith({
    mode: 'watch',
    testPathPattern: 'src/file_\\(xyz\\)\\.js'
  });
});
it('can select a pattern that matches multiple files', async () => {
  const {
    stdout,
    hookEmitter,
    updateConfigAndRun,
    plugin,
    type
  } = (0, _pluginTester.default)(_plugin.default);
  hookEmitter.onFileChange({
    projects
  });
  const runPromise = plugin.run({}, updateConfigAndRun);
  stdout.write.mockReset();
  type('f', 'i', _jestWatcher.KEYS.ENTER);
  expect(stdout.write.mock.calls.join('\n')).toMatchSnapshot();
  await runPromise;
  expect(updateConfigAndRun).toHaveBeenCalledWith({
    mode: 'watch',
    testPathPattern: 'fi'
  });
});
it('can configure the key and prompt', async () => {
  const {
    plugin
  } = (0, _pluginTester.default)(_plugin.default, {
    config: {
      key: 'l',
      prompt: 'have a custom prompt'
    }
  });
  expect(plugin.getUsageInfo()).toEqual({
    key: 'l',
    prompt: 'have a custom prompt'
  });
});
it('file matching is case insensitive', async () => {
  const {
    stdout,
    hookEmitter,
    updateConfigAndRun,
    plugin,
    type
  } = (0, _pluginTester.default)(_plugin.default);
  hookEmitter.onFileChange({
    projects
  });
  const runPromise = plugin.run({}, updateConfigAndRun);
  type('f');
  stdout.write.mockReset();
  type('I');
  expect(stdout.write.mock.calls.join('\n')).toMatchSnapshot();
  type(_jestWatcher.KEYS.ENTER);
  await runPromise;
});
it("selected file doesn't include trimming dots", async () => {
  const {
    hookEmitter,
    updateConfigAndRun,
    plugin,
    type
  } = (0, _pluginTester.default)(_plugin.default, {
    stdout: {
      columns: 40
    }
  });
  hookEmitter.onFileChange({
    projects: [{
      config: {
        rootDir: '/project'
      },
      testPaths: ['/project/src/long_name_gonna_need_trimming.js']
    }]
  });
  const runPromise = plugin.run({}, updateConfigAndRun);
  type('t', 'r', 'i', 'm', 'm', _jestWatcher.KEYS.ARROW_DOWN, _jestWatcher.KEYS.ENTER);
  await runPromise;
  expect(updateConfigAndRun).toHaveBeenCalledWith({
    mode: 'watch',
    testPathPattern: 'ong_name_gonna_need_trimming\\.js'
  });
});