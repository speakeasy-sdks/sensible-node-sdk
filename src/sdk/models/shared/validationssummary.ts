import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// ValidationsSummary
/**
 * Summary of the extracted fields that failed validation rules you write in the Sensible app.
 **/
export class ValidationsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "fields" })
  fields?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "fields_present" })
  fieldsPresent?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "skipped" })
  skipped?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "warnings" })
  warnings?: number;
}
