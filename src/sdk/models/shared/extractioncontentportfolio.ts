import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClassificationPortfolio } from "./classificationportfolio";
import { FileMetadata } from "./filemetadata";
import { Validation } from "./validation";
import { ValidationsSummary } from "./validationssummary";
import { Expose, Type } from "class-transformer";

export class ExtractionContentPortfolio extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClassificationPortfolio })
  @Expose({ name: "classification_summary" })
  @Type(() => ClassificationPortfolio)
  classificationSummary?: ClassificationPortfolio[];

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "file_metadata" })
  @Type(() => FileMetadata)
  fileMetadata?: FileMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "parsed_document" })
  parsedDocument?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "validation_summary" })
  @Type(() => ValidationsSummary)
  validationSummary?: ValidationsSummary;

  @SpeakeasyMetadata({ elemType: Validation })
  @Expose({ name: "validations" })
  @Type(() => Validation)
  validations?: Validation[];
}
