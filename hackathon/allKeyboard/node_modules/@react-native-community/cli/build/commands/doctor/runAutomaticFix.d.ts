import { Ora } from 'ora';
import { EnvironmentInfo } from '@react-native-community/cli-types';
import { HealthCheckCategoryResult } from './types';
export declare enum AUTOMATIC_FIX_LEVELS {
    ALL_ISSUES = "ALL_ISSUES",
    ERRORS = "ERRORS",
    WARNINGS = "WARNINGS"
}
interface RunAutomaticFixArgs {
    healthchecks: HealthCheckCategoryResult[];
    automaticFixLevel: AUTOMATIC_FIX_LEVELS;
    stats: {
        errors: number;
        warnings: number;
    };
    loader: Ora;
    environmentInfo: EnvironmentInfo;
}
export default function ({ healthchecks, automaticFixLevel, stats, environmentInfo, }: RunAutomaticFixArgs): Promise<void>;
export {};
//# sourceMappingURL=runAutomaticFix.d.ts.map