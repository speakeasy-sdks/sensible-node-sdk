/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Specifies to return extraction results to the defined webhook as soon as they're complete, so you don't have to poll for results status. Sensible also calls this webhook on error.
 */
export class Webhook extends SpeakeasyBase {
  /**
   * Information additional to the API response, for example a UUID for verification.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payload" })
  payload?: string;

  /**
   * Webhook destination. Sensible will POST to this URL when the extraction is complete.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
