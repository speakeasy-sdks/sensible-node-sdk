/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Classification } from "./classification";
import { ExtractionStatusEnum } from "./extractionstatusenum";
import { FileMetadata } from "./filemetadata";
import { Validation } from "./validation";
import { ValidationsSummary } from "./validationssummary";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The structured data extracted from the document.
 *
 * @remarks
 *
 */
export class ExtractionSingleResponse extends SpeakeasyBase {
  /**
   * Metadata about how Sensible chose the config to use for this extraction. Sensible compares all configs in the document type, then chooses the best extraction using fingerprints, scores, or a combination of the two. When two extractions tie by score and fingerprints, Sensible chooses the first configuration in alphabetic order. For more details, see [fingerprints](https://docs.sensible.so/docs/fingerprint#notes)
   */
  @SpeakeasyMetadata({ elemType: Classification })
  @Expose({ name: "classification_summary" })
  @Type(() => Classification)
  classificationSummary?: Classification[];

  /**
   * Date and time Sensible set the extraction's status to COMPLETED
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completed" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completed?: Date;

  /**
   * Name of the "configuration",  a collection of SenseML queries for extracting document data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: string;

  /**
   * Date and time Sensible created the extraction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  /**
   * Name of the environment to which the configuration used by this extraction was published.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment?: string;

  /**
   * Extraction error messages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  /**
   * Metadata about the PDF file, for example author, authoring tool, and modified date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "file_metadata" })
  @Type(() => FileMetadata)
  fileMetadata?: FileMetadata;

  /**
   * Unique ID for the extraction, used to retrieve the extraction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Data extracted from the document, structured as an array of fields.
   *
   * @remarks
   * Configure the verbosity parameter in the SenseML configuration to return
   * extraction metadata, such as:
   * - page numbers
   * - the bounding polygons that
   * define line coordinates
   * - for text that Sensible OCR'd, confidence scores.
   * For more information, see [Verbosity](doc:verbosity).
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parsed_document" })
  parsedDocument?: Record<string, any>;

  /**
   * Extraction status (WAITING, COMPLETE, FAILED)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ExtractionStatusEnum;

  /**
   * Unique user-friendly name for a document type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  /**
   * Summary of the extracted fields that failed validation rules you write in the Sensible app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validation_summary" })
  @Type(() => ValidationsSummary)
  validationSummary?: ValidationsSummary;

  /**
   * Which extracted fields failed validation rules you write in the Sensible app
   */
  @SpeakeasyMetadata({ elemType: Validation })
  @Expose({ name: "validations" })
  @Type(() => Validation)
  validations?: Validation[];
}