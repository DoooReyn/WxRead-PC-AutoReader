const child_process = require("child_process");
const commands = {
    build_win32: "electron-builder --win --ia32 --config='./win32.yaml'",
    build_win64: "electron-builder --win --x64 --config='./win64.yaml'",
};

(() => {
  /**
   * 发布安装包
   */
  console.log("commands", commands);
  child_process.execSync(commands.build_win32);
  console.log("win32 installer is packed.");
  child_process.execSync(commands.build_win64);
  console.log("win64 installer is packed.");
})();
