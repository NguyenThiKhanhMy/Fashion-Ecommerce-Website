import React from "react";
import Banner  from "../components/Banner";
const About = () => {
    return (
        <>
        <div className="mx-5">
            <div>
                <div className="row ">
                    <div class="col mx-3 my-5">
                        <img src="image/brand.jpg" style={{width: "42rem"}}/></div> 
                    <div class="col mx-3 my-5">
                        <h3 className="d-flex algin-items-center">The José is a modern romantic woman.</h3>
                            <p><small>Dear José là thương hiệu thời trang đương đại với phong cách lãng mạn, tươi trẻ và phóng khoáng. Tên thương hiệu như lời mở đầu của một bức thư tình ngọt ngào với mong muốn thổi một làn gió mới vào tủ đồ của phái đẹp Việt qua những thiết kế thời thượng và xinh xắn.</small></p>
                            <p><small>Cảm hứng của Dear José đến từ tình yêu, mùa xuân và những câu chuyện cổ tích. Hình bóng của chúng tôi được khẳng định bởi tính linh hoạt và vẫn có thể đáp ứng được sự thay đổi của xu hướng và các mùa trong năm. Chúng tôi chi tiết và chu đáo trong quá trình sản xuất để đảm bảo quần áo không chỉ có giá cả phải chăng mà còn có thể chịu được thử thách của thời gian.</small></p>
                            <p><small>Sản phẩm của Dear José được tạo ra bởi những người thợ thủ công lành nghề nhất Sài Gòn và được hàng nghìn khách hàng tại Việt Nam cũng như Đông Nam Á yêu thích.</small></p>
                    </div>
                </div>
            </div>
            <div id="contact" class="container-fluid bg-grey">
                <h3 class="text-center my-4">Liên hệ với chúng tôi</h3>
                <div class="row">
                    <div class="col">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span class=""></span> HaNoi, VN</p>
                        <p><span class=""></span> +12345678910</p>
                        <p><span class=""></span> adore@gmail.com</p>
                    </div>
                <div class="col">
                <div class="row mb-4">
                    <div class="col-sm-6 form-group">
                        <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                    </div>
                    <div class="col-sm-6 form-group">
                        <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                    </div>
                </div>
                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                <div class="row">
                    <div class="col-sm-12 form-group my-3">
                        <button class="btn btn-default pull-right" type="submit">Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default About;