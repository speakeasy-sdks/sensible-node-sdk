/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EncodedPdf extends SpeakeasyBase {
    /**
     * This parameter shows option \#2 for posting PDF bytes. To populate it, you can encode a document, like this [example](https://github.com/sensible-hq/sensible-docs/raw/main/readme-sync/assets/v0/pdfs/1_extract_your_first_data.pdf) using a free online PDF-to-base64 encoder and paste the resulting bytes into this parameter, or you can right-click this parameter field and select **Use Example Value**.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document" })
    document: string;
}
