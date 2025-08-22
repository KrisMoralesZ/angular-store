import { inject, Injectable } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { defaultMetaData } from '@shared/Mocks/defaultMetaData';
import { PageMetaData } from '@shared/models/pageMetaData.model';

@Injectable({
  providedIn: 'root',
})
export class MetaTagsService {
  titleService = inject(Title);
  metaService = inject(Meta);

  updateMetaTags(metaData: Partial<PageMetaData>) {
    const metaDataToUpdate = {
      ...defaultMetaData,
      ...metaData,
    };

    const tags = this.generateMetaDefinitions(metaDataToUpdate);

    tags.forEach((tag: MetaDefinition) => this.metaService.updateTag(tag));
    this.titleService.setTitle(metaDataToUpdate.title);
  }

  private generateMetaDefinitions(metaData: PageMetaData): MetaDefinition[] {
    return [
      {
        name: 'title',
        content: metaData.title,
      },
      {
        name: 'description',
        content: metaData.description,
      },
      {
        property: 'og:title',
        content: metaData.title,
      },
      {
        property: 'og:description',
        content: metaData.description,
      },
      {
        property: 'og:image',
        content: metaData.image,
      },
      {
        property: 'og:url',
        content: metaData.url,
      },
    ];
  }
}
