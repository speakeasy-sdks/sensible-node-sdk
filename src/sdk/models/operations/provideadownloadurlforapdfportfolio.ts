import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ProvideADownloadUrlForAPdfPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document_url" })
  documentUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "types" })
  types: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  @Type(() => shared.Webhook)
  webhook?: shared.Webhook;
}

export class ProvideADownloadUrlForAPdfPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: ProvideADownloadUrlForAPdfPortfolioRequestBody;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=environment",
  })
  environment?: shared.EnvironmentEnum;
}

export class ProvideADownloadUrlForAPdfPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  extractFromUrlPortfolioResponse?: shared.ExtractFromUrlPortfolioResponse;

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
