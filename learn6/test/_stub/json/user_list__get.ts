import * as mm from '@/model';

// このような形のスタブにしておけば
//   webpack-dev-server によるテスト時は、「//＞＞」～「//＜＜」 までの間を読んでテストデータとして使う
//   jest などによるユニットテスト自は、このファイルをそのまま import して使える


/** */
export const getUserListData: mm.api.UserDto[] =
//>>
[
	{id: 12345, name: 'Alpha Beta', groupId: 123 },
	{id: 22345, name: 'Foo Bar', groupId: 123 },
	{id: 32345, name: 'Lorem Ipsum', groupId: 223 },
]
//<<
;