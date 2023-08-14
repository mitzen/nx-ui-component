export namespace Model 
{
    export interface PostingId { 
        id: string
    }

    export interface JobSearch { 
        searchText: string,
        jobCategory: string,
        jobLocation: string,
        pageSize?: number,
        skipPage?: number
    }
    
    export interface PostingInfo { 
        name: string,
        description: string,
        createdAt?: Date,
        updatedAt?: Date,
        jobInDetails: string
    }
    
    export interface JobSearchSliceState extends JobSearch {
        status: 'idle' | 'loading' | 'failed',
        jobResult: PostingInfo[],
        currentJobPosting: PostingInfo,
        pageNo: number, 
        pageSize: number
    }    

    export interface JobSearchModel extends JobSearch {
        skip: number, 
        pageSize: number
    }
}