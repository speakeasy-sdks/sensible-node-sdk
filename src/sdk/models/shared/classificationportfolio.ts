import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Score } from "./score";
import { Expose, Type } from "class-transformer";

export class ClassificationPortfolio extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  @Type(() => Score)
  score?: Score;
}
