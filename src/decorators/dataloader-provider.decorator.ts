import { applyDecorators, Injectable, SetMetadata, Type } from '@nestjs/common';
import { METADATA_KEY } from 'src/constants';
import { DataloaderFactory } from 'src/interfaces/dataloader-factory.interface';

/**
 * Decorator that marks a class as a dataloader factory provider.
 * Decorated classes must implement the `DataloaderFactory` interface.
 */
export function DataloaderProvider(): (target: Type<DataloaderFactory>) => void {
  return applyDecorators(Injectable(), SetMetadata(METADATA_KEY, true));
}
