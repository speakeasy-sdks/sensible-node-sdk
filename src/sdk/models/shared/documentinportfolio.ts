import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExtractionContentPortfolio } from "./extractioncontentportfolio";
import { Expose, Type } from "class-transformer";

export class DocumentInPortfolio extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "documentType" })
  documentType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "endPage" })
  endPage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "output" })
  @Type(() => ExtractionContentPortfolio)
  output?: ExtractionContentPortfolio;

  @SpeakeasyMetadata()
  @Expose({ name: "startPage" })
  startPage?: number;
}
