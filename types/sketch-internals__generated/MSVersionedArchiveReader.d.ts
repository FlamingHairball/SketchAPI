interface MSVersionedArchiveReaderUninitialized<InitializedType = MSVersionedArchiveReader> extends MSArchiveReaderUninitialized<MSVersionedArchiveReader> {}

interface MSVersionedArchiveReader extends MSArchiveReader {
}

declare const MSVersionedArchiveReader: {
  alloc(): MSVersionedArchiveReaderUninitialized;
  class(): MSVersionedArchiveReader;
  unarchiveFileAtURL_actualVersion_error(url: NSURL, versionOut: MSDocumentVersion, error: MOPointer<NSError>): any;
  first4bytesOfFileAtURL(url: NSURL): number;
  accessInstanceVariablesDirectly(): boolean;

}
