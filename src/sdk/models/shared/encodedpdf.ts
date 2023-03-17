import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EncodedPdf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  document: string;
}
