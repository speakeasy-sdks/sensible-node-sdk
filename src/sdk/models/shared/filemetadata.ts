import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

// FileMetadataInfo
/**
 * Normalized metadata about the PDF, returned if available.
 **/
export class FileMetadataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "author" })
  author?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "creation_date" })
  creationDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "creator" })
  creator?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modification_date" })
  modificationDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "producer" })
  producer?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

// FileMetadata
/**
 * Metadata about the PDF file, for example author, authoring tool, and modified date.
 **/
export class FileMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "info" })
  @Type(() => FileMetadataInfo)
  info?: FileMetadataInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;
}
