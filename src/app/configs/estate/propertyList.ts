import dayjs from 'dayjs';
import { estatePropertyModel } from 'src/app/models/estate/estate-property';

export const estatePropertyList: estatePropertyModel[] = [
  {
    propertyId: 1,
    propertyType: 'Townhouse',
    propertyAddress: '633 Huynh Van Nghe',
    propertyImageUrl: '../../assets/images/estate/house-1.jpeg',
    price: 269,
    timeAdded: dayjs().format('DD/MM/YYYY'),
    numberOfBathrooms: 2,
    numberOfBedrooms: 2,
    squareMeters: 200,
  },
  {
    propertyId: 2,
    propertyType: 'Apartment',
    propertyAddress: '615 KP4',
    propertyImageUrl: '../../assets/images/estate/house-2.jpeg',
    price: 1212,
    timeAdded: dayjs().format('DD/MM/YYYY'),
    numberOfBathrooms: 3,
    numberOfBedrooms: 4,
    squareMeters: 999,
  },
  {
    propertyId: 3,
    propertyType: 'Apartment',
    propertyAddress: '477/26 Au Co',
    propertyImageUrl: '../../assets/images/estate/house-3.jpeg',
    price: 449.6,
    timeAdded: dayjs().format('DD/MM/YYYY'),
    numberOfBathrooms: 2,
    numberOfBedrooms: 2,
    squareMeters: 310,
  },
  {
    propertyId: 4,
    propertyType: 'House',
    propertyAddress: '1 KT',
    propertyImageUrl: '../../assets/images/estate/house-4.jpeg',
    price: 112.6,
    timeAdded: dayjs().format('DD/MM/YYYY'),
    numberOfBathrooms: 1,
    numberOfBedrooms: 2,
    squareMeters: 60,
  },
  {
    propertyId: 5,
    propertyType: 'Apartment',
    propertyAddress: '09 DV',
    propertyImageUrl: '../../assets/images/estate/house-5.jpeg',
    price: 321.99,
    timeAdded: dayjs().format('DD/MM/YYYY'),
    numberOfBathrooms: 1,
    numberOfBedrooms: 2,
    squareMeters: 99,
  }
];