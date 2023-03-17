import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GenerateAnUploadUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=document_type",
  })
  documentType: string;
}

export class GenerateAnUploadUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=environment",
  })
  environment?: shared.EnvironmentEnum;
}

export class GenerateAnUploadUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateAnUploadUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: GenerateAnUploadUrlQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GenerateUrlRequest;
}

export class GenerateAnUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  sensibleEncounteredAnUnknownError?: string;

  @SpeakeasyMetadata()
  unauthorized?: string;

  @SpeakeasyMetadata()
  unsupportedMediaType?: string;

  @SpeakeasyMetadata()
  uploadResponse?: shared.UploadResponse;
}
