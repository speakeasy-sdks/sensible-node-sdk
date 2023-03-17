import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentInPortfolio } from "./documentinportfolio";
import { ExtractionStatusEnum } from "./extractionstatusenum";
import { Expose, Transform, Type } from "class-transformer";

export class ExtractionPortfolioRetrievalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "completed" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completed?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata({ elemType: DocumentInPortfolio })
  @Expose({ name: "documents" })
  @Type(() => DocumentInPortfolio)
  documents?: DocumentInPortfolio[];

  @SpeakeasyMetadata()
  @Expose({ name: "download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "page_count" })
  pageCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ExtractionStatusEnum;
}
