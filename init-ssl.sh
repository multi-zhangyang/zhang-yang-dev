#!/bin/bash

# 初始化 SSL 证书脚本
# 使用方法: chmod +x init-ssl.sh && ./init-ssl.sh

DOMAIN="zhangyang.dev"
EMAIL="your-email@example.com"  # 改成你的邮箱

# 创建目录
mkdir -p certbot/conf certbot/www

# 先用临时 nginx 配置获取证书
cat > nginx-temp.conf << 'EOF'
events { worker_connections 1024; }
http {
    server {
        listen 80;
        server_name zhangyang.dev www.zhangyang.dev;
        location /.well-known/acme-challenge/ { root /var/www/certbot; }
        location / { return 200 'ok'; }
    }
}
EOF

# 启动临时 nginx
docker run -d --name nginx-temp \
    -p 80:80 \
    -v $(pwd)/nginx-temp.conf:/etc/nginx/nginx.conf:ro \
    -v $(pwd)/certbot/www:/var/www/certbot \
    nginx:alpine

# 获取证书
docker run --rm \
    -v $(pwd)/certbot/conf:/etc/letsencrypt \
    -v $(pwd)/certbot/www:/var/www/certbot \
    certbot/certbot certonly --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

# 清理临时容器
docker stop nginx-temp && docker rm nginx-temp
rm nginx-temp.conf

echo "SSL 证书获取完成！现在运行: docker compose up -d --build"
