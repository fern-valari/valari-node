/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { ValariApi } from "@fern-api/valari";

export class UnauthorizedError extends errors.ValariApiError {
    constructor(body: ValariApi.ErrorBody) {
        super({
            message: "UnauthorizedError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
