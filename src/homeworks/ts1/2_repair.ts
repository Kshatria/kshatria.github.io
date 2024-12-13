/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

export class SomeClass {
  set: Set<number>;
  channel: BroadcastChannel;

  constructor() {
    this.set = new Set<number>([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Money = {
	type: 'Money';
  currency: string;
  amount: number;
};

export type Percent = {
	type: 'Percent';
  percent: number;
};

export type DataValue = Money | Percent;

export type Data = {
  value: DataValue;
};

export const getDataAmount = (data: Data): number => {
  switch (data.value.type) {
    case 'Money':
      return data.value.amount;

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const unhandled: never = data as never;
      throw new Error(`unknown type: ${data.value.type}`);
    }
  }
};
