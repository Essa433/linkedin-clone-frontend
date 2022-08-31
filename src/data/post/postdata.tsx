export interface IPost {
	id: string;
	avatarUrl: string;
	name: string;
	bio: string;
	likes: string[];
	message: string;
	imageUrl: string;
	videoUrl: string;
}
export const initialPosts: IPost[] = [
	{
		id: '1',
		avatarUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20220608214422/galaryImage8.png',
		name: 'Mohanad Al-Safadi',
		bio: 'Cyber security expert',
		message: 'hi im the messag ',
		imageUrl: '',
		videoUrl: '',
		likes: [],
	},
];
