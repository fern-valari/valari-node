/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ValariApi } from "@fern-api/valari";
import * as core from "../../../../core";

export const ApplicationData: core.serialization.ObjectSchema<
    serializers.ApplicationData.Raw,
    ValariApi.ApplicationData
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
});

export declare namespace ApplicationData {
    interface Raw {
        id?: string | null;
        type?: string | null;
    }
}
