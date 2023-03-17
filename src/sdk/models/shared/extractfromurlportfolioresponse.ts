import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExtractionStatusEnum } from "./extractionstatusenum";
import { Expose, Transform } from "class-transformer";

export class ExtractFromUrlPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ExtractionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "types" })
  types?: string[];
}
