import React from "react"
import Layout from "components/layout"
import Aaron from "static/images/aaron_dancel.png"
import Slider from "components/slider"

const MyStory =()=>{

	const teamImages = [
		'https://lh3.googleusercontent.com/KPrs7aS5iU3MGtQnfaLSr4xsDgyZYA5dg6ysVlpkuJfcoZK1K9SFFTHThMQSJmxDSzgUkFLb-t8yFyCOEFTTQ0i0iiFUhXsJ_3oQJXAlXzHXDA6nZfJjU7A_Gqxp7wba5htFgYmA5CsuW8U_dD0i5KjcKfYlGzEc0gK4zc8Wuz3sADNju10evDmtagEIekU7pqTe4xF0FOm6bELw33KiV1ZEcKJ76VCVXentx9-c3j54UW-tyxD5fd05BmTg9M7x65s7hVIKUqjNU_3qXTZL-Q5JV8E3fIizMu4nEG65LLpNuY6O6sLD5AODkj4yn1LDqQSJJ-nbH1H2F-Ek-P6nZC5pQYZVKQ1J1-LDk9PJJCgcaHUdYUSwNp9-QzcgXiLhqCdjPkdnoz42bxR7a_lBkuE_xTciA-UzF8K-PbHcNgh07CDO2rlpeVBsHHpXgEY5IevN7xBo6uqgl1_PGggrxBJwHMeEEyRnGaqpog1V7lSjpxBY9QyRz0v-V-_jVr6n8QtUi82FBfdgGGb3YOnZmlChaaZ1z-6drj8poff-wjzxgHniTPoGdC3CKmZehwSSZBDhCKTPQQAVPvxlRq6kJy8-Uk-IDdRrXOBcu5N__PsPUUm543vaLSZI8-TO0pemzV301glgb8Ky8w6pJEiShEsd2awPWhtBfCSOwoXV4BM75YfI2vw33M32VaU=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/ZQrKNiJNWYAdTcKF5DeD4wPBqjm5btcSN_x5vbgNFxVwdG6dwH9nRh9-G44yA5mSj8eRD-YFjxpIhe5twknIqbkoGh88l560yj3fCwuA79_42gvYYCoSA6rwnXlCt9gSQiWMvsoixgKFcla6GO6KiUe6nmXturYqJwJ-c99Oss1GJQmlQbv8XpQqB2dxt_a5gE65rLlvpHMrEubAGRcp9FY-gG8eknzLVOHvYGwKHVwM5vuqX-7_NVnaxnmg7XK98qmUTLscHFcwN5XH3FaX3V6283tYYqf-CIXHTv6MN4cfn2gCv-hn1uraMWN9dXFoTupfVyXnaKYL_-tPIMVUA5ZzQdXZf3eFEmklv_uPtf4D_ngiOE5d0OKCfotToej8WermCarznfXrrstrrwk0ZI6uEc3JF3Yqk1ZFNTqw3sUhA5e9TPS8dr0ILUx9R5LYK18jFZ2E-ckFqAXsWNbV41A71RwS0OnqrNfO0XtbDSr-XssCeBuVHL_-P3ckuFY0Fi-9G0_LCkIYKuzOE2GJuNg1Jx5zckn7trlSxCIiNsf6QW3c2vCC1y4jUo6EIAMEVRvXqPcq8g45q8UPVu2XXfZTF1TXP4FfMUsI1eISMtAgFiDsm0sVEgvU8gQHOwy-tlTN8AiHXhmKzK3bR_plX8lcgYZokIeQJ0bSOy2GjHImUTXMBalB1RInm3w=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/TJWeVYp-qf6iCOO_bmvr41IJqYPw6T-ZT7yrdpcAsOXZQ4wZsl7qxwsr4MzHx5sLTENFhoNe2lZYMoR0-XZl5eWfNs2GpYFGmQVwXZAi2cd8CbGpVvApGtERlkAJ8xAZMDFs0dtdwYKLdSYNMJQldqP5-9OcwSWJ__Yils_aGxUkPl3H5IW1eCow8jxeJqfm6U2yVs4Qp8UYOKV2pchTbJfbeZGzJ0bII9heqFM9r6J_IFgobjsIuJwdkoTaoEpTwPPrPXBf98SsfQFj4eZyWSvzlrBdjnllwK_uzqwcYF86zH6je2t71CeS5TmvkSDXS9b-87HyW_xPEliXW8FZl7dDOg9MhrmzbmKnC4gkGMY_slUwpnbig4Dq9vEH0GUybCRDluD6Zz4iT0WyaoUAcbfa9qOmD5qOXyO1BlR8tbQ_k6d99LWHkpdMPK0xnbc5ncr56EgodMmu3sFK3eCNR1LAPstdGawIwLkM1dCqQkOrxrEmVDCinNCKwTX9PikTwnCBgHODfwM_-S8s23uxkE2jhTMZqw1Hgk-sN66mbw2BqYBL786GFAI-aISBLu2uhJpCSn7CVl09hciziBZCnrMwpCFzImJj2adrZkKlD7vU67tOaNtQW3VEpvEot3lxq9KgdFBPE9LQZavXDeqb6oILr-_dCHF5fSZhN4Y7aXRVGosmcvvUL_MBi60=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/t1cSyT7mOSYOwEYEvaVPRU5rlvG5hNoHUU_Fw8nP-u5zycQ0yv0fPEGPj69q5qS3fLM5GVMHnrrkT15pCGRYYAe88ORxFDUhzNopo3x0JNXWFDajcUDr4hu_oTr2OGr6jI23R_1u_xPRJ0uEtJUmGplf-ypmZYVcpgk_MQjSCsHrGEZHF_CAnKKw7zPeRaBM3r6x-yMwNTm9K89y-Ru2UTJukV879TTar6Na2_MRzOCHmk16wAEzyBxf3TMdohIpuSV9ajVZFHI-YQRRJECmD_I7sX7HABgrwUP_2eQIcM4ZIoYF-yzhS7KGm6DHfzTZm6T2bm1JkUnzHhSo7eqUrBtN2E1fGV6dyplbhVzHcyBvGDfbVrQO7CY2BX07VvhY_JYX48bl8d4NnltDP7vgOdg209eSZFN9HSwmri2GPZRZNry8QHPBFbDh_8N-Yx4ZRjwFJCIBafh_PPe8vYwJ_5x38XPnCtb1v667FkY6PozXFPQbB_NrsGHi5lV_j3n0CRS2W9MhjvRg2WBGkHIle4AJzpbf6ELMzsAJzm3-KvAQY1_OIHZVJT-AP4hdXZW5hRpZyCY87SwfxwHVoh6sgZ6u-VV-aIG2VKvN5_5kklktmnCUcu1Pp09UtpLEm-02OsuVfh3ywOg6Y5rXJ82Z-vys-nEVjrWHWwGc5ka8n0BAWrMtLgWogj7d7tw=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/KPrs7aS5iU3MGtQnfaLSr4xsDgyZYA5dg6ysVlpkuJfcoZK1K9SFFTHThMQSJmxDSzgUkFLb-t8yFyCOEFTTQ0i0iiFUhXsJ_3oQJXAlXzHXDA6nZfJjU7A_Gqxp7wba5htFgYmA5CsuW8U_dD0i5KjcKfYlGzEc0gK4zc8Wuz3sADNju10evDmtagEIekU7pqTe4xF0FOm6bELw33KiV1ZEcKJ76VCVXentx9-c3j54UW-tyxD5fd05BmTg9M7x65s7hVIKUqjNU_3qXTZL-Q5JV8E3fIizMu4nEG65LLpNuY6O6sLD5AODkj4yn1LDqQSJJ-nbH1H2F-Ek-P6nZC5pQYZVKQ1J1-LDk9PJJCgcaHUdYUSwNp9-QzcgXiLhqCdjPkdnoz42bxR7a_lBkuE_xTciA-UzF8K-PbHcNgh07CDO2rlpeVBsHHpXgEY5IevN7xBo6uqgl1_PGggrxBJwHMeEEyRnGaqpog1V7lSjpxBY9QyRz0v-V-_jVr6n8QtUi82FBfdgGGb3YOnZmlChaaZ1z-6drj8poff-wjzxgHniTPoGdC3CKmZehwSSZBDhCKTPQQAVPvxlRq6kJy8-Uk-IDdRrXOBcu5N__PsPUUm543vaLSZI8-TO0pemzV301glgb8Ky8w6pJEiShEsd2awPWhtBfCSOwoXV4BM75YfI2vw33M32VaU=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/ZQrKNiJNWYAdTcKF5DeD4wPBqjm5btcSN_x5vbgNFxVwdG6dwH9nRh9-G44yA5mSj8eRD-YFjxpIhe5twknIqbkoGh88l560yj3fCwuA79_42gvYYCoSA6rwnXlCt9gSQiWMvsoixgKFcla6GO6KiUe6nmXturYqJwJ-c99Oss1GJQmlQbv8XpQqB2dxt_a5gE65rLlvpHMrEubAGRcp9FY-gG8eknzLVOHvYGwKHVwM5vuqX-7_NVnaxnmg7XK98qmUTLscHFcwN5XH3FaX3V6283tYYqf-CIXHTv6MN4cfn2gCv-hn1uraMWN9dXFoTupfVyXnaKYL_-tPIMVUA5ZzQdXZf3eFEmklv_uPtf4D_ngiOE5d0OKCfotToej8WermCarznfXrrstrrwk0ZI6uEc3JF3Yqk1ZFNTqw3sUhA5e9TPS8dr0ILUx9R5LYK18jFZ2E-ckFqAXsWNbV41A71RwS0OnqrNfO0XtbDSr-XssCeBuVHL_-P3ckuFY0Fi-9G0_LCkIYKuzOE2GJuNg1Jx5zckn7trlSxCIiNsf6QW3c2vCC1y4jUo6EIAMEVRvXqPcq8g45q8UPVu2XXfZTF1TXP4FfMUsI1eISMtAgFiDsm0sVEgvU8gQHOwy-tlTN8AiHXhmKzK3bR_plX8lcgYZokIeQJ0bSOy2GjHImUTXMBalB1RInm3w=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/TJWeVYp-qf6iCOO_bmvr41IJqYPw6T-ZT7yrdpcAsOXZQ4wZsl7qxwsr4MzHx5sLTENFhoNe2lZYMoR0-XZl5eWfNs2GpYFGmQVwXZAi2cd8CbGpVvApGtERlkAJ8xAZMDFs0dtdwYKLdSYNMJQldqP5-9OcwSWJ__Yils_aGxUkPl3H5IW1eCow8jxeJqfm6U2yVs4Qp8UYOKV2pchTbJfbeZGzJ0bII9heqFM9r6J_IFgobjsIuJwdkoTaoEpTwPPrPXBf98SsfQFj4eZyWSvzlrBdjnllwK_uzqwcYF86zH6je2t71CeS5TmvkSDXS9b-87HyW_xPEliXW8FZl7dDOg9MhrmzbmKnC4gkGMY_slUwpnbig4Dq9vEH0GUybCRDluD6Zz4iT0WyaoUAcbfa9qOmD5qOXyO1BlR8tbQ_k6d99LWHkpdMPK0xnbc5ncr56EgodMmu3sFK3eCNR1LAPstdGawIwLkM1dCqQkOrxrEmVDCinNCKwTX9PikTwnCBgHODfwM_-S8s23uxkE2jhTMZqw1Hgk-sN66mbw2BqYBL786GFAI-aISBLu2uhJpCSn7CVl09hciziBZCnrMwpCFzImJj2adrZkKlD7vU67tOaNtQW3VEpvEot3lxq9KgdFBPE9LQZavXDeqb6oILr-_dCHF5fSZhN4Y7aXRVGosmcvvUL_MBi60=w973-h648-no?authuser=0',
		'https://lh3.googleusercontent.com/t1cSyT7mOSYOwEYEvaVPRU5rlvG5hNoHUU_Fw8nP-u5zycQ0yv0fPEGPj69q5qS3fLM5GVMHnrrkT15pCGRYYAe88ORxFDUhzNopo3x0JNXWFDajcUDr4hu_oTr2OGr6jI23R_1u_xPRJ0uEtJUmGplf-ypmZYVcpgk_MQjSCsHrGEZHF_CAnKKw7zPeRaBM3r6x-yMwNTm9K89y-Ru2UTJukV879TTar6Na2_MRzOCHmk16wAEzyBxf3TMdohIpuSV9ajVZFHI-YQRRJECmD_I7sX7HABgrwUP_2eQIcM4ZIoYF-yzhS7KGm6DHfzTZm6T2bm1JkUnzHhSo7eqUrBtN2E1fGV6dyplbhVzHcyBvGDfbVrQO7CY2BX07VvhY_JYX48bl8d4NnltDP7vgOdg209eSZFN9HSwmri2GPZRZNry8QHPBFbDh_8N-Yx4ZRjwFJCIBafh_PPe8vYwJ_5x38XPnCtb1v667FkY6PozXFPQbB_NrsGHi5lV_j3n0CRS2W9MhjvRg2WBGkHIle4AJzpbf6ELMzsAJzm3-KvAQY1_OIHZVJT-AP4hdXZW5hRpZyCY87SwfxwHVoh6sgZ6u-VV-aIG2VKvN5_5kklktmnCUcu1Pp09UtpLEm-02OsuVfh3ywOg6Y5rXJ82Z-vys-nEVjrWHWwGc5ka8n0BAWrMtLgWogj7d7tw=w973-h648-no?authuser=0',
	]

	return(
		<>
			<Layout>
				<section className="my-story-section">
					<div className="container">
						<div className="two-grid-col">
							<div className="grid-child content-story">
								<h1>
									<span className="sub-heading">My Story | Aaron Dancel</span>
									I never dreamt of Success,
									I worked for it.
								</h1>

								<p>
									I'm the active CEO of Ink Shared Solutions, Inc. an Outsourcing company based Philippines.
									Co-Founder of Bookgini a Tech company in Singapore. 
									Co-Founder of Stratton Press Publishing an online publishing company in USA.
								</p>

								<p>
									 In business as in life things aren't always
									 going to look pretty, or feel comfortable, or 
									 even seem necessary. Just have faith not to quit,
									 understand that things workout how and when they're 
									 supposed to.
								</p>


								<div className="heading-foot-note">
									<h1>
										<span>Aaron Dancel</span>
										<span>Ramen CEO</span>
									</h1>
								</div>
							</div>

							<div className="grid-child image_cont">
								<img src={Aaron} alt="__aaron_dancel"/>
							</div>
						</div>


						<section className="teams">
							 <h1>Sales Team</h1>
							 <Slider 
							 	dataImages={teamImages}
							 	customWidth={{maxWidth : '100%'}}
							 	imageWidth={{width:'300px'}}
							 />
						</section>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default MyStory