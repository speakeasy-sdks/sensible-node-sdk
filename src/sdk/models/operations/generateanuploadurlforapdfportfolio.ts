import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GenerateAnUploadUrlForAPdfPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "types" })
  types: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  @Type(() => shared.Webhook)
  webhook?: shared.Webhook;
}

export class GenerateAnUploadUrlForAPdfPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: GenerateAnUploadUrlForAPdfPortfolioRequestBody;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=environment",
  })
  environment?: shared.EnvironmentEnum;
}

export class GenerateAnUploadUrlForAPdfPortfolioResponse extends SpeakeasyBase {
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
  uploadPortfolioResponse?: shared.UploadPortfolioResponse;
}
