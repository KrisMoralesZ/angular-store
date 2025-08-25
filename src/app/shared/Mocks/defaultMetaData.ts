import { environment } from '@env/';
import { PageMetaData } from '@shared/models/pageMetaData.model';

export const defaultMetaData: PageMetaData = {
  title: 'NG Store',
  description: 'Ng Store is a store for Ng products',
  image: '',
  url: environment.domain,
};
