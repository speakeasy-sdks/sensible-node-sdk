import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// Webhook
/**
 * Specifies to return extraction results to the defined webhook as soon as they're complete, so you don't have to poll for results status. Sensible also calls this webhook on error.
 **/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "payload" })
  payload?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
