/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ValariApi } from "@fern-api/valari";
import * as core from "../../../../core";

export const LinkSessionsAttributes: core.serialization.ObjectSchema<
    serializers.LinkSessionsAttributes.Raw,
    ValariApi.LinkSessionsAttributes
> = core.serialization.object({
    status: core.serialization.string().optional(),
    sessionType: core.serialization.string().optional(),
    expiresAt: core.serialization.string().optional(),
    ip: core.serialization.string().optional(),
    longitude: core.serialization.string().optional(),
    latitude: core.serialization.string().optional(),
    errorUrl: core.serialization.string().optional(),
    successUrl: core.serialization.string().optional(),
    webviewUrl: core.serialization.string().optional(),
    isExpired: core.serialization.boolean().optional(),
});

export declare namespace LinkSessionsAttributes {
    interface Raw {
        status?: string | null;
        sessionType?: string | null;
        expiresAt?: string | null;
        ip?: string | null;
        longitude?: string | null;
        latitude?: string | null;
        errorUrl?: string | null;
        successUrl?: string | null;
        webviewUrl?: string | null;
        isExpired?: boolean | null;
    }
}
