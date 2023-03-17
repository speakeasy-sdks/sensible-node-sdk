import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class RetrievingResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class RetrievingResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrievingResultsPathParams;
}

export class RetrievingResultsResponse extends SpeakeasyBase {
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
  retrievingResults200ApplicationJSONOneOf?: any;
}
