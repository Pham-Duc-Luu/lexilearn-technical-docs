---
sidebar_position: 1
position: 1
---

# Mở đầu

## Lexilearn là gì?

**Lexilearn** là một dự án cá nhân được tôi phát triển với mục đích hỗ trợ việc học tiếng Nhật một cách hiệu quả, linh hoạt và cá nhân hóa hơn.

Ban đầu, tôi đã thử sử dụng một số ứng dụng học ngôn ngữ phổ biến như **Anki** hay **Quizlet**. Mặc dù những công cụ này đều mạnh mẽ và được nhiều người sử dụng, tôi vẫn cảm thấy chưa thực sự hài lòng với trải nghiệm học tập mà chúng mang lại — cả về giao diện, tính tùy biến và cảm giác sử dụng hàng ngày.

Chính vì vậy, tôi đã quyết định tự xây dựng một ứng dụng học ngôn ngữ dành riêng cho mình, với những tính năng tập trung vào trải nghiệm người dùng, hiệu quả học tập, và sự linh hoạt trong việc tổ chức kiến thức.

Lexilearn không chỉ đơn thuần là một app luyện từ vựng, mà còn là một hệ thống hỗ trợ học tập thông minh, có thể phát triển thêm để phục vụ nhiều nhu cầu học ngôn ngữ khác nhau.

> Đây là nơi khởi đầu cho hành trình tạo nên một công cụ học tập phù hợp với chính bản thân và cũng có thể hữu ích cho những người học khác sau này.

## Tính năng chính

### 🎯 Học từ vựng bằng Flashcard

Lexilearn cung cấp trải nghiệm học từ vựng thông qua **thẻ ghi nhớ (flashcard)** — một phương pháp đã được chứng minh là hiệu quả trong việc ghi nhớ từ vựng lâu dài.

### 🔁 Áp dụng mô hình lặp lại ngắt quãng (Spaced Repetition)

Khác với cách học truyền thống, Lexilearn áp dụng **Spaced Repetition** — mô hình lặp lại ngắt quãng — giúp người học ôn tập từ vựng đúng thời điểm bộ não chuẩn bị quên, từ đó:

- **Tăng khả năng ghi nhớ lâu dài**
- **Tối ưu hóa thời gian học**
- **Giảm thiểu việc học lại từ đầu**

Hệ thống tự động điều chỉnh lịch ôn tập dựa trên mức độ thành thạo của người dùng với từng từ, mang lại trải nghiệm học cá nhân hóa và hiệu quả hơn.

---

> Lexilearn không chỉ là nơi ghi nhớ từ vựng, mà còn là công cụ giúp bạn xây dựng nền tảng ngôn ngữ một cách khoa học và bền vững.

---

# Kiến trúc hệ thống

Lexilearn được xây dựng theo mô hình **microservice** hiện đại, cho phép mở rộng linh hoạt, dễ bảo trì và phân chia rõ ràng giữa các chức năng.

## 🖼️ Tổng quan kiến trúc

Hệ thống được chia thành hai phần chính:

---

## 🌐 Frontend

- Gồm **1 project**
- Xây dựng bằng **React** kết hợp với **Vite** nhằm tối ưu tốc độ phát triển và hiệu suất runtime.
- Giao tiếp với các service backend thông qua **API Gateway**

---

## 🛠️ Backend (Gồm 4 service chính)

### 1. **API Gateway**

- **Công nghệ**: Spring Cloud Gateway
- Đóng vai trò là cổng vào duy nhất cho toàn bộ backend.
- Định tuyến request từ frontend đến các microservice tương ứng.
- Xử lý xác thực, logging, và giới hạn tốc độ nếu cần.

### 2. **Main Backend Service**

- **Công nghệ**: Spring Boot
- Chịu trách nhiệm xử lý các nghiệp vụ chính của ứng dụng như:
  - Quản lý người dùng
  - Quản lý từ vựng và flashcard
  - Quản lý dữ liệu học tập và mô hình lặp lại ngắt quãng (Spaced Repetition)

### 3. **Media Distributor Service**

- **Công nghệ**: Spring Boot
- Phân phối và lưu trữ các file media như hình ảnh, âm thanh.
- Tích hợp với các nền tảng cloud để upload, truy xuất và chia sẻ media giữa các service.

### 4. **Generator Service**

- **Công nghệ**: Python + FastAPI
- Sử dụng các mô hình **Text-to-Speech (TTS)** để tạo ra file âm thanh phục vụ cho flashcard.
- Có thể tích hợp các model TTS như **Coqui**, **Google TTS**, hoặc **OpenAI TTS**.

### 5. **Notification Service**

- **Công nghệ**: ASP.NET Core
- Chịu trách nhiệm gửi thông báo đến người dùng hoặc các service khác.
- Hỗ trợ các loại thông báo như: nhắc học, thông báo hệ thống, hoặc cảnh báo.

---

## 🔄 Giao tiếp giữa các service

- Các service sử dụng **REST API** để giao tiếp với nhau.
- Có thể mở rộng thêm dùng **Message Queue** như RabbitMQ hoặc Kafka trong tương lai để xử lý bất đồng bộ và tăng tính chịu tải.

---

> Kiến trúc microservice giúp Lexilearn dễ dàng mở rộng, tích hợp công nghệ đa nền tảng, và linh hoạt trong việc phát triển từng phần độc lập.
