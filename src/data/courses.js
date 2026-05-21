export const modules = [
  {
    id: 'foodapps',
    title: 'Vận Hành FoodApps',
    icon: '🛵',
    color: 'from-orange-500 to-red-500',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-200',
    description: 'Hướng dẫn đăng nhập, nhận đơn và thanh toán trên các nền tảng giao đồ ăn.',
    lessons: [
      {
        id: 'shopeefood',
        channel: 'shopeefood',
        title: 'ShopeeFood – Shopee Partner',
        icon: '🍊',
        duration: '10 phút',
        sections: [
          {
            title: 'A – Đăng Nhập',
            content: [
              'Tải ứng dụng **Shopee Partner** trên CH Play hoặc App Store.',
              'Mở ứng dụng, chọn **"Đăng nhập với SMS"**.',
              'Nhập số điện thoại và chọn **"Tiếp tục"**. Sau đó nhập mã xác nhận để nhận OTP.',
              'Nhập mã OTP và chọn **"Tiếp"** để hoàn tất đăng nhập.',
            ],
          },
          {
            title: 'B – Thanh Toán',
            content: [
              '**Có 2 hình thức rút tiền:**',
              '• **Thủ công:** Cửa hàng tự truy cập và rút tiền về số dư khả dụng.',
              '• **Tự động:** Khi số dư khả dụng đạt mức **500.000đ**, SPF tự động rút tiền về tài khoản.',
              '⚠️ Quán chỉ có thể gửi yêu cầu rút tiền **01 lần mỗi ngày** trên ứng dụng Shopee Partner.',
              '⚠️ Cửa hàng **không thể tùy chỉnh** số tiền rút – chỉ rút toàn bộ số dư khả dụng.',
              '⚠️ Chỉ **Vai trò Admin** (tài khoản liên kết SĐT trên hợp đồng) mới có thể truy cập mục Thanh toán, xem lịch sử giao dịch, cài đặt thanh toán tự động, rút tiền.',
            ],
          },
          {
            title: 'C – Trang Giao Dịch',
            content: [
              '**Thanh toán đơn hàng:** Các khoản thực thu từ đơn hàng đã hoàn thành.',
              '**Rút tiền:** Các khoản yêu cầu thanh toán từ số dư Shopee Partner vào tài khoản ngân hàng.',
              '**Điều chỉnh số dư:** Các khoản cộng/trừ vào số dư bởi các đơn hoàn tiền (khách hàng khiếu nại).',
              '**Thanh toán quảng cáo:** Các chi phí quảng cáo trừ vào giá trị đơn hàng (nếu có).',
              '**Thực thu ngày:** Tổng thực thu của ngày được ghi nhận.',
              '⚠️ Chỉ Vai trò Admin mới có thể xem lịch sử giao dịch và thực hiện các thao tác thanh toán.',
            ],
          },
          {
            title: 'D – Cập Nhật Giờ Hoạt Động',
            content: [
              '*Áp dụng khi cửa hàng tạm nghỉ hoặc đang có nhiều đơn, nhân sự không chuẩn bị kịp.*',
              '1. Chọn mục **"Đơn hàng"** → Chọn mục **"Mở Cửa"**.',
              '2. Bấm chọn **"Cài đặt quán bận"**.',
              '3. Chọn **thời gian tạm đóng cửa** phù hợp.',
              '4. Chọn **"Đã xong"** để xác nhận.',
            ],
          },
        ],
      },
      {
        id: 'grabfood',
        channel: 'grabfood',
        title: 'GrabFood – GrabMerchant',
        icon: '🟢',
        duration: '10 phút',
        sections: [
          {
            title: 'A – Đăng Nhập',
            content: [
              'Tải ứng dụng **GrabMerchant** trên CH Play hoặc App Store.',
              'Nhập **ID và mật khẩu** được hệ thống cung cấp.',
              'Chọn **"Lưu mật khẩu"** để tiện đăng nhập lần sau.',
              'Bấm **"Đăng nhập"** để vào ứng dụng.',
            ],
          },
          {
            title: 'B – Thanh Toán',
            content: [
              'Doanh thu thực nhận được **tự động rút về tài khoản ngân hàng** của đối tác nhượng quyền vào ngày **n+1**.',
              'Đối với ngày lễ/Tết, nếu có thay đổi thời gian nhận tiền, GrabFood sẽ **gửi mail thông báo**.',
              'Truy cập mục **"Tài Chính"** trong app để xem chi tiết doanh thu từng đơn hàng.',
            ],
          },
          {
            title: 'C – Quy Trình Nhận Đơn',
            content: [
              '1. Xem đơn mới ở mục **"Đang chuẩn bị"**.',
              '2. Chọn **thời gian làm đơn** phù hợp và bấm **"Xác Nhận"**.',
              '3. Nhập **mã đơn hàng** vào mục ghi chú trên POS.',
              '4. Nhấn **"Đã làm xong"** trước thời gian quy định.',
            ],
          },
          {
            title: 'D – Cập Nhật Tình Trạng & Thực Đơn',
            content: [
              '**Cập nhật tình trạng cửa hàng:**',
              '• **Bình thường:** Nhận đơn hàng bình thường.',
              '• **Đang bận:** Kéo dài thời gian chuẩn bị, tạm thời không nhận đơn mới.',
              '• **Tạm nghỉ:** Tạm ngưng nhận đơn.',
              'ℹ️ Hệ thống tự động chuyển về trạng thái Bình thường sau khi hết thời gian Đang bận/Tạm nghỉ.',
              '',
              '**Cập nhật trạng thái thực đơn:**',
              '• Chỉnh sửa 1 hoặc nhiều món cùng lúc với các trạng thái: **Có bán / Hết bán hôm nay / Hết đến khi có hàng**.',
            ],
          },
        ],
      },
      {
        id: 'vill',
        channel: 'vill',
        title: 'VILL – Vill Merchant',
        icon: '🔵',
        duration: '8 phút',
        sections: [
          {
            title: 'A – Đăng Nhập',
            content: [
              'Tải ứng dụng **Vill Merchant** trên CH Play hoặc App Store.',
              'Nhập **ID và mật khẩu** được hệ thống cung cấp.',
              'Chọn **"Lưu mật khẩu"** để tiện đăng nhập lần sau.',
              'Bấm **"Đăng nhập"**.',
            ],
          },
          {
            title: 'B – Nhận Đơn & Thanh Toán',
            content: [
              '1. Xem đơn ở mục **"Đơn Mới"**.',
              '2. Chuẩn bị và **bấm bill** giống như order của khách.',
              '3. Đối chiếu **mã đơn hàng và tên tài xế** để đưa hàng.',
              'ℹ️ Doanh thu được tổng hợp và thanh toán theo lịch của VILL – kiểm tra mục **"Doanh thu"** trong app.',
            ],
          },
          {
            title: 'C – Cập Nhật Giờ Hoạt Động',
            content: [
              '*Áp dụng khi cửa hàng tạm nghỉ hoặc đang có nhiều đơn, nhân sự không chuẩn bị kịp.*',
              '1. Chọn mục **"Đang mở cửa"**.',
              '2. Chọn **thời gian tạm đóng cửa** phù hợp.',
              '3. Sau đó bấm **"Xác nhận"**.',
            ],
          },
        ],
      },
      {
        id: 'goka',
        channel: 'goka',
        title: 'Goka – Goka Merchant',
        icon: '🟣',
        duration: '8 phút',
        sections: [
          {
            title: 'A – Đăng Nhập',
            content: [
              'Tải ứng dụng **Goka Merchant** trên CH Play hoặc App Store.',
              'Nhập **ID và mật khẩu** được hệ thống cung cấp.',
              'Chọn **"Lưu mật khẩu"** để tiện đăng nhập lần sau.',
              'Bấm **"Đăng nhập"**.',
            ],
          },
          {
            title: 'B – Nhận Đơn & Thanh Toán',
            content: [
              'Khi có đơn mới, app sẽ **báo tiếng và hiển thị thông báo**.',
              '1. Mở thông báo, xem chi tiết đơn hàng.',
              '2. Bấm **"Xác nhận đơn"** để bắt đầu chuẩn bị.',
              '3. Chuẩn bị đơn và bấm **"Đã xong"** khi hoàn tất.',
              '4. Đối chiếu **thông tin tài xế** khi giao hàng.',
              'ℹ️ Doanh thu được tổng hợp và thanh toán theo lịch của Goka – kiểm tra mục **"Báo cáo"** trong app.',
            ],
          },
          {
            title: 'C – Cập Nhật Giờ Hoạt Động',
            content: [
              '*Áp dụng khi cửa hàng tạm nghỉ hoặc đang có nhiều đơn, nhân sự không chuẩn bị kịp.*',
              '1. Vào mục **"Cài đặt cửa hàng"**.',
              '2. Bật/tắt trạng thái **"Mở cửa / Đóng cửa"** hoặc chọn **"Tạm bận"**.',
              '3. Hệ thống tự động cập nhật trạng thái hiển thị trên app khách hàng.',
            ],
          },
        ],
      },
      {
        id: 'iloka',
        channel: 'iloka',
        title: 'ILOKA – ILOKA Partner',
        icon: '🔴',
        duration: '8 phút',
        sections: [
          {
            title: 'A – Đăng Nhập',
            content: [
              'Tải ứng dụng **ILOKA Partner** trên CH Play hoặc App Store.',
              'Nhập **số điện thoại và mật khẩu** được hệ thống cung cấp.',
              'Bấm **"Đăng nhập"**.',
            ],
          },
          {
            title: 'B – Nhận Đơn & Thanh Toán',
            content: [
              'Khi có đơn mới, app sẽ **rung và hiện ở mục "Đơn hàng mới"**.',
              '1. Nhấn vào đơn hàng để xem chi tiết.',
              '2. Bấm **"Nhận đơn"** và bắt đầu chuẩn bị.',
              '3. Chuẩn bị xong bấm **"Hoàn tất chuẩn bị"**.',
              '4. Đối chiếu **mã đơn và thông tin tài xế** khi giao hàng.',
              'ℹ️ Doanh thu được thanh toán về tài khoản ngân hàng theo lịch định kỳ của ILOKA.',
            ],
          },
          {
            title: 'C – Cập Nhật Giờ Hoạt Động',
            content: [
              '*Áp dụng khi cửa hàng tạm nghỉ hoặc đang có nhiều đơn, nhân sự không chuẩn bị kịp.*',
              '1. Vào **"Trang chủ"** → chọn biểu tượng **cài đặt**.',
              '2. Chọn **"Trạng thái cửa hàng"**.',
              '3. Chuyển sang **"Tạm đóng"** và chọn thời gian phù hợp.',
              '4. Bấm **"Xác nhận"** để cập nhật.',
            ],
          },
        ],
      },
      {
        id: 'order-detail',
        title: 'Xem Chi Tiết Đơn Hàng',
        icon: '📋',
        duration: '5 phút',
        sections: [
          {
            title: 'GrabFood – Cách Đọc Chi Tiết Đơn',
            content: [
              'Vào trang **Trang chủ → Đơn hàng** trên GrabMerchant.',
              '**Cấu trúc đơn GrabFood:**',
              '• `1 x Tên Món Chính (Size)` – tên và cỡ món.',
              '• `\'Yêu cầu của khách hàng\'` – ghi chú đặc biệt.',
              '• Tùy chọn món / Thêm topping – danh sách tùy chọn.',
              '• Mã giảm giá (nếu có).',
              '• Giá từng phần: giá món chính + giá tùy chọn.',
            ],
          },
          {
            title: 'ShopeeFood – Cách Đọc Chi Tiết Đơn',
            content: [
              'Vào trang **Trang chủ → Đơn hàng** trên Shopee Partner.',
              '**Cấu trúc đơn ShopeeFood:**',
              '• `1 x Tên Món Chính (Size)` – tên và cỡ món.',
              '• `1 x Tùy chọn món` + `1 x Thêm topping` – từng dòng riêng lẻ.',
              '• **Ghi chú của khách hàng** – hiển thị rõ ràng.',
              '• Mã giảm giá (nếu có).',
              '• **Giá tổng cộng** – thay vì từng phần như GrabFood.',
              '⚠️ **Lưu ý:** ShopeeFood hiển thị ghi chú khách trực tiếp dưới tên món, GrabFood hiển thị bằng dấu nháy đơn.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'reviews',
    title: 'Đánh Giá FoodApp',
    icon: '⭐',
    color: 'from-yellow-400 to-orange-400',
    bgLight: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    description: 'Quy trình xử lý đánh giá và tặng quà khách hàng trên GrabFood & ShopeeFood.',
    lessons: [
      {
        id: 'review-process',
        title: 'Quy Trình Đánh Giá & Tặng Quà',
        icon: '⭐',
        duration: '7 phút',
        sections: [
          {
            title: 'Trường Hợp 1: Đánh Giá Hợp Lệ',
            content: [
              '1. **Khách hàng đánh giá** nhà hàng 5 sao và bấm **"Gửi"**.',
              '2. Khách hàng **gửi màn hình đánh giá** cho Zalo Phúc Tea.',
              '3. Khách hàng được nhận **Card 10K** làm phần thưởng.',
              '',
              '✅ *Để nhận quà, khách cần liên hệ Zalo Phúc Tea qua mã QR/SĐT in trên Thư Cảm Ơn.*',
            ],
          },
          {
            title: 'Trường Hợp 2: Đánh Giá Không Hợp Lệ',
            content: [
              'Các trường hợp **KHÔNG** được tặng quà:',
              '❌ Khách hàng chỉ mới **rating 5 sao cho tài xế** (chưa đánh giá nhà hàng).',
              '❌ Khách hàng **khen nhưng đánh giá dưới 5 sao**.',
              '❌ Khách hàng đánh giá **nhưng chưa bấm "Gửi"**.',
              '',
              'ℹ️ Đơn hàng được hệ thống GrabFood/ShopeeFood ghi nhận là "Đã đánh giá" (không phân biệt cửa hàng hay shipper) thì **không thể đánh giá lần 2 hoặc chỉnh sửa**.',
              '',
              '⚠️ *Đối với đơn quá **12 ngày** kể từ ngày nhận hàng, khách hàng không thể đánh giá.*',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'crm',
    title: 'CRM & Tích – Đổi Điểm',
    icon: '🎁',
    color: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Chương trình thành viên, tích điểm 3% và quy trình đổi điểm lấy voucher.',
    lessons: [
      {
        id: 'membership',
        title: 'Đăng Ký Thành Viên',
        icon: '👤',
        duration: '8 phút',
        sections: [
          {
            title: 'Chương Trình "Nhập Hội Nhà Hươu – Rinh Rinh Voucher"',
            content: [
              'Khi khách hàng **đăng ký thành viên mới** qua kênh **Zalo Trà Sữa Phúc Tea (tích vàng)** sẽ nhận ngay **01 voucher giảm 40.000đ** cho hóa đơn từ 120.000đ.',
              '',
              '**Điều kiện áp dụng:**',
              '• Mã chỉ áp dụng khi đặt hàng qua **kênh Zalo OA Trà Sữa Phúc Tea (tích vàng)**.',
              '• Mỗi mã chỉ sử dụng được **01 lần duy nhất**.',
              '• Mã có hiệu lực trong **30 ngày** kể từ ngày đăng ký thành viên.',
            ],
          },
          {
            title: 'Lưu Ý Vận Hành Đăng Ký Thành Viên',
            content: [
              '**1/ Hướng dẫn đăng ký thành viên cho khách:**',
              'Nếu khách gặp khó khăn, nhân sự có thể:',
              '• **Cách 1:** Thao tác đăng ký **giúp khách hàng** trực tiếp.',
              '• **Cách 2:** Hướng dẫn khách **nhắn tin lên Zalo Phúc Tea (tích vàng)** để CSKH hỗ trợ.',
              '• **Cách 3:** Xin SĐT khách và gửi lên **Group messenger nhận đơn** để CSKH liên hệ khách.',
              '',
              '**2/ Hướng dẫn sử dụng voucher 40K:**',
              'Voucher **KHÔNG** áp dụng tại cửa hàng – chỉ dùng khi đặt hàng trên **Zalo OA (tích vàng)**.',
              'Nếu khách không áp mã được, nhân sự chụp **mã 8 ký tự** gửi lên Group để CSKH kiểm tra.',
            ],
          },
        ],
      },
      {
        id: 'earn-points',
        title: 'Quy Trình Tích Điểm',
        icon: '💰',
        duration: '8 phút',
        sections: [
          {
            title: 'Tỉ Lệ Tích Điểm',
            content: [
              'Sau mỗi đơn hàng thành công, khách được tích **3% trên tổng số tiền đã chi tiêu**.',
              '',
              '**Ví dụ:** Khách chi tiêu 100.000đ → tích được **3% × 100.000 = 3.000 điểm**.',
            ],
          },
          {
            title: 'Hướng Dẫn Tích Điểm Cho Khách',
            content: [
              '1. Khách mua hàng tại cửa hàng.',
              '2. Sau khi khách chọn xong món, nhân sự bấm **"Thêm khách hàng"** trên POS.',
              '3. Nhập **số điện thoại khách hàng**.',
              '4. Chọn **"Thêm"** để ghi nhận tích điểm.',
              '5. Sau khi cửa hàng hoàn thành đơn, khách được tích **3%** trên tổng tiền đã chi.',
            ],
          },
          {
            title: 'Lưu Ý Quan Trọng Về Tích Điểm',
            content: [
              '⚠️ **LƯU Ý 1:** Hệ thống tự động tích điểm khi nhân sự nhập SĐT khách. Tuy nhiên để **đổi điểm**, khách cần **đăng ký thành viên bằng SĐT đã tích điểm**. Khách cần dùng **01 SĐT duy nhất** cho cả tích và đổi điểm.',
              '⚠️ **LƯU Ý 2:** Nếu nhân sự bổ sung SĐT **sau khi đơn hàng đã thành công**, đơn đó sẽ **KHÔNG được tích điểm**.',
              '⚠️ **LƯU Ý 3:** Tổng điểm tích lũy có hiệu lực đến hết ngày **31/12 của năm hiện hành**.',
              '⚠️ **LƯU Ý 4:** Nhân sự cửa hàng **KHÔNG được** tích điểm vào SĐT cá nhân. Nếu bị phát hiện, hệ thống sẽ **xóa điểm** và thông báo đến chủ cửa hàng.',
            ],
          },
        ],
      },
      {
        id: 'redeem-points',
        title: 'Quy Trình Đổi Điểm',
        icon: '🎟️',
        duration: '8 phút',
        sections: [
          {
            title: 'Hướng Dẫn Nhân Sự Áp Voucher Đổi Điểm',
            content: [
              '1. Sau khi chọn xong món và nhập SĐT khách, nhân sự nhấn mục **"E – Voucher"** trên POS.',
              '2. Nhập **mã voucher** khách cung cấp vào khung.',
              '3. Chọn **"Thêm"** để áp dụng mã.',
              '',
              '**Nếu khách gặp khó khăn đổi điểm, nhân sự có các phương án:**',
              '• **Cách 1:** Thao tác **đổi điểm giúp khách** trực tiếp.',
              '• **Cách 2:** Hướng dẫn khách nhắn tin lên **Zalo Phúc Tea (tích vàng)** để CSKH hỗ trợ.',
              '• **Cách 3:** Xin SĐT khách gửi lên **Group messenger** để CSKH hỗ trợ liên hệ.',
            ],
          },
          {
            title: 'Hướng Dẫn Đổi Điểm Thay Khách Hàng',
            content: [
              '1. Quét mã QR **"Tích Điểm Đổi Quà"** trên menu.',
              '2. Nhấn vào link hiện ra.',
              '3. Chọn **"Đổi Điểm"** → **"Đổi Điểm Ngay"**.',
              '4. Chọn **voucher muốn đổi** và xác nhận.',
            ],
          },
          {
            title: 'Lưu Ý Vận Hành Đổi Điểm',
            content: [
              '⚠️ Nếu khách chưa đăng ký thành viên, nhân sự cần **đăng ký thành viên trước**, sau đó mới tiến hành đổi điểm.',
              '⚠️ Voucher đổi điểm chỉ có hạn sử dụng trong **7 ngày**.',
              '⚠️ Thao tác đổi điểm chỉ thực hiện thông qua **Zalo cá nhân** – cần có sự **cho phép của khách hàng** và thao tác **trực tiếp trước mặt khách** để tránh phát sinh không mong muốn.',
            ],
          },
        ],
      },
    ],
  },
];
