import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// Score
/**
 * The score for the extraction, used to help choose the best extraction.
 **/
export class Score extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fields_present" })
  fieldsPresent?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "penalties" })
  penalties?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}
