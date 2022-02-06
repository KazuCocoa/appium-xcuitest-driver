import { utilities } from 'appium-ios-device';

const extensions = {}, commands = {};

/**
 * Returns device info.
 *
 * @returns {Object} The response of `/wda/device/info'`
 * @throws {Error} if an error raised by command
 */
commands.mobileGetDeviceInfo = async function mobileGetDeviceInfo () {
  return await this.proxyCommand('/wda/device/info', 'GET');
};

commands.mobileGetDeviceInfoLockdown = async function mobileGetDeviceInfoLockdown () {
  return await utilities.getDeviceValues(this.opts.device.udid);
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
