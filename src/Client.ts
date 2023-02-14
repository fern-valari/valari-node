/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { ValariApi } from "@fern-api/valari";
import urlJoin from "url-join";
import * as serializers from "./serialization";
import * as errors from "./errors";
import { Client as LinkSessionClient } from "./api/resources/linkSession/client/Client";

export declare namespace ValariApiClient {
    interface Options {
        environment?: environments.ValariApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class ValariApiClient {
    constructor(private readonly options: ValariApiClient.Options) {}

    /**
     * Use your Access Credentials to get a Bearer Token
     * @throws {ValariApi.UnauthorizedError}
     */
    public async createToken(request: ValariApi.CreateAuthenticationTokenRequest): Promise<ValariApi.Authentication> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ValariApiEnvironment.Production, "/auth/partners"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CreateAuthenticationTokenRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Authentication.parseOrThrow(_response.body as serializers.Authentication.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new ValariApi.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body as serializers.ErrorBody.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                default:
                    throw new errors.ValariApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ValariApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ValariApiTimeoutError();
            case "unknown":
                throw new errors.ValariApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private _linkSession: LinkSessionClient | undefined;

    public get linkSession(): LinkSessionClient {
        return (this._linkSession ??= new LinkSessionClient(this.options));
    }
}
