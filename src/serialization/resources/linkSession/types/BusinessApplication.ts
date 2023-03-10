/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ValariApi } from "@fern-api/valari";
import * as core from "../../../../core";

export const BusinessApplication: core.serialization.ObjectSchema<
    serializers.BusinessApplication.Raw,
    ValariApi.BusinessApplication
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../..")).BusinessApplicationData),
});

export declare namespace BusinessApplication {
    interface Raw {
        data: serializers.BusinessApplicationData.Raw;
    }
}
