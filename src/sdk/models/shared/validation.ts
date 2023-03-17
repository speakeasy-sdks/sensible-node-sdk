import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ValidationSeverityEnum {
  Error = "error",
  Warning = "warning",
  Skipped = "skipped",
}

export class Validation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "severity" })
  severity?: ValidationSeverityEnum;
}
