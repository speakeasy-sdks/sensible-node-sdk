import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Score } from "./score";
import { Expose, Type } from "class-transformer";

export class Classification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fingerprints" })
  fingerprints?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "fingerprints_present" })
  fingerprintsPresent?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  @Type(() => Score)
  score?: Score;
}
