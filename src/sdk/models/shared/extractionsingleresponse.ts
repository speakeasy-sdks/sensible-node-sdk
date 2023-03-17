import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Classification } from "./classification";
import { ExtractionStatusEnum } from "./extractionstatusenum";
import { FileMetadata } from "./filemetadata";
import { Validation } from "./validation";
import { ValidationsSummary } from "./validationssummary";
import { Expose, Transform, Type } from "class-transformer";

export class ExtractionSingleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Classification })
  @Expose({ name: "classification_summary" })
  @Type(() => Classification)
  classificationSummary?: Classification[];

  @SpeakeasyMetadata()
  @Expose({ name: "completed" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completed?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: string;

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
  @Expose({ name: "file_metadata" })
  @Type(() => FileMetadata)
  fileMetadata?: FileMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parsed_document" })
  parsedDocument?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ExtractionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_summary" })
  @Type(() => ValidationsSummary)
  validationSummary?: ValidationsSummary;

  @SpeakeasyMetadata({ elemType: Validation })
  @Expose({ name: "validations" })
  @Type(() => Validation)
  validations?: Validation[];
}
