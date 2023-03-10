/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { ValariApi } from "@fern-api/valari";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.ValariApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * @throws {ValariApi.BadRequestError}
     */
    public async create(request: ValariApi.CreateALinkSessionRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ValariApiEnvironment.Production, "/linkSessions"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CreateALinkSessionRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ValariApi.BadRequestError(
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

    /**
     * Retrieve a link session by token
     * @throws {ValariApi.BadRequestError}
     */
    public async get(token: string, request: ValariApi.ShowLinkSessionRequest = {}): Promise<ValariApi.LinkSession> {
        const { include } = request;
        const _queryParams = new URLSearchParams();
        if (include != null) {
            _queryParams.append("include", include);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ValariApiEnvironment.Production,
                `/linkSessions/${token}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.LinkSession.parseOrThrow(_response.body as serializers.LinkSession.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new ValariApi.BadRequestError(
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
}
