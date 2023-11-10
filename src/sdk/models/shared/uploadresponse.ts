/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExtractionStatus } from "./extractionstatus";
import { Expose, Transform } from "class-transformer";

export class UploadResponse extends SpeakeasyBase {
    /**
     * Date and time Sensible created the extraction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created?: Date;

    /**
     * Unique ID for the extraction, used to retrieve the extraction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Extraction status (WAITING, COMPLETE, FAILED)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ExtractionStatus;

    /**
     * Unique user-friendly name for a document type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * URL at which to PUT the PDF bytes array for extraction. for example, curl -T ./sample.pdf "YOUR_UPLOAD_URL"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "upload_url" })
    uploadUrl?: string;
}
