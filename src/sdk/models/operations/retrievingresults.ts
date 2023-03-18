import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class RetrievingResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
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
