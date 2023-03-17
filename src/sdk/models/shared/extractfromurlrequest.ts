import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContentTypeEnum } from "./contenttypeenum";
import { Webhook } from "./webhook";
import { Expose, Type } from "class-transformer";

export class ExtractFromUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content_type" })
  contentType?: ContentTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "document_url" })
  documentUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  @Type(() => Webhook)
  webhook?: Webhook;
}
