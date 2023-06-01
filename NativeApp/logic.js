import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const jsonAsset = Asset.fromModule(require('./assets/data.json'));
await jsonAsset.downloadAsync();
const jsonFilePath = jsonAsset.localUri;
const jsonContent = await FileSystem.readAsStringAsync(jsonFilePath);
const jsonData = JSON.parse(jsonContent);
jsonData.newField = 'New value';
const updatedJsonString = JSON.stringify(jsonData);
await FileSystem.writeAsStringAsync(jsonFilePath, updatedJsonString);


















/*import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import data from './huina.json'; // Импорт JSON файла
import * as FileSystem from 'expo-file-system';

const ExampleComponent = () => {
  useEffect(() => {
    // Чтение содержимого файла
    const jsonData = JSON.parse(JSON.stringify(data));

    // Вывод содержимого файла
    console.log('Содержимое JSON файла:', jsonData);
  }, []);

  useEffect(() => {
    const readJsonFile = async () => {
      try {
        const fileUri = `FileSystem.documentDirectory + 'assets/data.json' `;
        const content = await FileSystem.readAsStringAsync(fileUri);
        const jsonData = JSON.parse(content);
        console.log('Содержимое JSON файла:', jsonData);
      } catch (error) {
        console.log('Ошибка чтения JSON файла:', error);
      }
    };

    readJsonFile();
  }, []);

  return (
    <View>
      <Text>Пример чтения JSON файла</Text>
    </View>
  );
};

export default ExampleComponent; */