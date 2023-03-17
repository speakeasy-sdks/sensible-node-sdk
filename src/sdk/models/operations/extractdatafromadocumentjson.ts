import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class ExtractDataFromADocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=document_type",
  })
  documentType: string;
}

export class ExtractDataFromADocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=environment",
  })
  environment?: shared.EnvironmentEnum;
}

export class ExtractDataFromADocumentJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtractDataFromADocumentPathParams;

  @SpeakeasyMetadata()
  queryParams: ExtractDataFromADocumentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EncodedPdf;
}

export class ExtractDataFromADocumentJsonResponse extends SpeakeasyBase {
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
