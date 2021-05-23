export interface ICourse {
    id: string | number;
    name: string;
    questionTitle?: string;
    backgroundImageUrl?: string;
    questionDescription?: string;
    description?: string;
    subDescription?: string;
    cardDescription?: string;
    cardImageUrl?: string;
    courseAverageRating?: number;
    overview: string;
    status: boolean;
    difficulty: string;
    startDate?: string;
    price: number;
    language: string;
    teacher?: string;
    category: any;
    topics: any;
    weeks: any;
    prerequisites: any;
}

export const fromDataToCourseModel = (data: any): ICourse => {
    const model: ICourse = {
        id: data.id,
        category: data.category,
        difficulty: data.difficulty,
        language: data.language,
        name: data.name,
        cardDescription: data.card_description,
        overview: data.overview,
        price: +data.price,
        status: data.status,
        topics: data.topics,
        backgroundImageUrl: data.background_image_url,
        cardImageUrl: data.card_image_url,
        courseAverageRating: data.course_average_rating,
        questionDescription: data.question_description,
        questionTitle: data.question_title,
        startDate: data.start_date,
        teacher: data.teacher,
        subDescription: data.sub_description,
        description: data.card_description,
        weeks: data.weeks,
        prerequisites: data.prerequisites
    };

    return model;
};
