import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExtractionStatusEnum } from "./extractionstatusenum";
import { Expose, Transform } from "class-transformer";

export class ExtractFromUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ExtractionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
