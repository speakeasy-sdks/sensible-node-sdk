import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class ExtractDataFromADocumentRawRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=image/tiff" })
  requestBody: Uint8Array;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=document_type",
  })
  documentType: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=environment",
  })
  environment?: shared.EnvironmentEnum;
}

export class ExtractDataFromADocumentRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  extractionSingleResponse?: shared.ExtractionSingleResponse;

  @SpeakeasyMetadata()
  sensibleEncounteredAnUnknownError?: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unauthorized?: string;

  @SpeakeasyMetadata()
  unsupportedMediaType?: string;
}
