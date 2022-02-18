import { Logger, TLogLevelName } from 'tslog';

const logLevel: TLogLevelName = process.env.LOG_LEVEL as TLogLevelName || 'info';

export const log: Logger = new Logger({ minLevel: logLevel, colorizePrettyLogs: true });
